from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution036(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_036/view.html"
