from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem024(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_024.html"
