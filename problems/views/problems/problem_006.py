from django.views.generic.base import TemplateView


class Problem006(TemplateView):
    template_name = "problems/problem_006/view.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["names"] = [
            "Kim",
            "Paz",
            "Talia",
            "Anima",
        ]

        return context
