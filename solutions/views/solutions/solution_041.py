from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution041(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_041/view.html"
