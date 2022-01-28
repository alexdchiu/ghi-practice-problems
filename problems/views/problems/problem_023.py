from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem023(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_023/view.html"
