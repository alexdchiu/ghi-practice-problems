from django.views.generic.base import TemplateView

from problems.views.problems.helpers import HasPeopleDataMixin


class Problem027(HasPeopleDataMixin, TemplateView):
    template_name = "problems/problem_027/view.html"
