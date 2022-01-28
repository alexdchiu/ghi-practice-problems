from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem025(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_025/view.html"
