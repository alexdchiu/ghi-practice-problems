from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasPeopleDataMixin


class Problem035(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_035/view.html"
