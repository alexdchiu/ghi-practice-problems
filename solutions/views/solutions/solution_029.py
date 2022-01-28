from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution029(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_029/view.html"
