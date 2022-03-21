from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution023(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_023.html"
