from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution037(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_037/view.html"
