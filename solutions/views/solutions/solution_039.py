from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution039(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_039/view.html"
