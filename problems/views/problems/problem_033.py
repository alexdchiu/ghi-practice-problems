from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasPeopleDataMixin


class Problem033(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_033.html"
