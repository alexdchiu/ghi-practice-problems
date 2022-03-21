from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution027(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_027.html"
