from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasPeopleDataMixin


class Problem038(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_038/view.html"
