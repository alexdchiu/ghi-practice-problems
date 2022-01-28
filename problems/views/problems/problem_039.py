from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasPeopleDataMixin


class Problem039(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_039/view.html"
