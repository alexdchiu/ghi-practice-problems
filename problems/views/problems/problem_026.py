from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem026(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_026.html"
