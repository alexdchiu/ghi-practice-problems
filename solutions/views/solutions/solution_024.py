from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution024(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_024/view.html"
