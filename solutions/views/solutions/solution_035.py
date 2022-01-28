from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution035(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_035/view.html"
