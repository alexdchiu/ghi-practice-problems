from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem030(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_030/view.html"
