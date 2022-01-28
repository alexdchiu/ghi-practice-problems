from django.views.generic.base import TemplateView


class Solution005(TemplateView):
    template_name = "solutions/solution_005/view.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["names"] = [
            "Kim",
            "Paz",
            "Talia",
            "Anima",
        ]

        return context
