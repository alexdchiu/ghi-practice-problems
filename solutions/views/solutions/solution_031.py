from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution031(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_031/view.html"
