from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution034(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_034/view.html"
