from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasPeopleDataMixin


class Problem034(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_034/view.html"
