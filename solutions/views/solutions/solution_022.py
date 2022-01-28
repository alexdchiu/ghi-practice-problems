from django.views.generic.base import TemplateView


class Solution022(TemplateView):
    template_name = "solutions/solution_022/view.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["names"] = [
            "Kim",
            "Paz",
            "Talia",
            "Anima",
        ]

        return context
