from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution033(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_033.html"
