from copy import copy
from django.shortcuts import render
from importlib import import_module
from django.templatetags.static import static
import random


injected_files = [
    f'<link rel="stylesheet" href="{static("mocha.css")}">'
    f'<script src="{static("chai.js")}"></script>',
    f'<script src="{static("chai-dom.js")}"></script>',
    f'<script src="{static("mocha.js")}"></script>',
]


def inject_tests(number):
    tests = copy(injected_files)
    tests.append(
        f'<script src="{static(f"tests/test_{number}.js")}"></script>'
    )

    def _inject_tests(retval):
        if hasattr(retval, "content"):
            content = retval.content.decode("utf-8")
            if "<head>" in content:
                index = content.find("<head>")
                content = (
                    content[0 : index + 6]
                    + "".join(tests)
                    + content[index + 6 :]
                )
            else:
                content = "".join(tests) + content
            if "</body>" in content:
                index = content.find("</body>")
                content = (
                    content[0:index]
                    + '<div id="mocha"></div>'
                    + content[index:]
                )
            else:
                content += '<div id="mocha"></div>'
            retval.content = content

    return _inject_tests


def show_instructions(request):
    return render(request, "instructions.html")


def show_shell(request, pk, number):
    context = {
        "next": pk + 1,
        "number": pk,
        "previous": pk - 1,
        "instructions": f"instructions/problem_{number}.html",
        "padded_number": number,
        "prefix": "solution" if "solution" in request.GET else None,
        "buster": random.randint(0, 1000000),
    }
    return render(request, "shell.html", context)


def dispatch_to_view(request, *args, **kwargs):
    pk = None
    if "pk" in kwargs:
        pk = kwargs.get("pk")
    if len(args) >= 1:
        pk = args[0]
    if pk is not None:
        number = str(pk).rjust(3, "0")
    if pk is not None and "shell" not in request.path:
        module = None
        response = None
        try:
            if "problems" in request.path:
                module = import_module(f"problems.views.problems.problem_{number}")
            else:
                module = import_module(f"solutions.views.solutions.solution_{number}")
        except ModuleNotFoundError:
            pass
        if module and hasattr(module, f"problem_{number}"):
            response = getattr(module, f"problem_{number}")(
                request,
                *args,
                **kwargs,
            )
        elif module and hasattr(module, f"solution_{number}"):
            response = getattr(module, f"solution_{number}")(
                request,
                *args,
                **kwargs,
            )
        elif module and hasattr(module, f"Problem{number}"):
            response = getattr(module, f"Problem{number}").as_view()(
                request,
                *args,
                **kwargs,
            )
        elif module and hasattr(module, f"Solution{number}"):
            response = getattr(module, f"Solution{number}").as_view()(
                request,
                *args,
                **kwargs,
            )
        else:
            raise ValueError(f"Could not find view for problem #{number}")

        callback_name = "add_post_render_callback"
        if response is not None and hasattr(response, callback_name):
            response.add_post_render_callback(inject_tests(number))
            return response
    elif pk is not None and "shell" in request.path:
        return show_shell(request, pk, number)
    return show_instructions(request)
