from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution038(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_038/view.html"
