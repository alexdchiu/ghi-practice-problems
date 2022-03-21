from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution040(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_040.html"
