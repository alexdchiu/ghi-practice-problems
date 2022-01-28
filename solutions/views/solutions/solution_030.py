from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution030(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_030/view.html"
