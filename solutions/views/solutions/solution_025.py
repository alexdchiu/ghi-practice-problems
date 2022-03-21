from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution025(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_025.html"
