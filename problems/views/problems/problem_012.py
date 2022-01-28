from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasLoggedInUserMixin


class Problem012(HasLoggedInUserMixin, TemplateView):
    template_name = "problems/problem_012/view.html"
