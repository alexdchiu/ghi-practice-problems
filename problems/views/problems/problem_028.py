from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem028(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_028.html"
