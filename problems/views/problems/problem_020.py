from django.views.generic.base import TemplateView


class Problem020(TemplateView):
    template_name = "problems/problem_020.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["names"] = [
            "Kim",
            "Paz",
            "Talia",
            "Anima",
        ]

        return context
