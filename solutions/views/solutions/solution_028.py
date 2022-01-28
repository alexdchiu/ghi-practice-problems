from django.views.generic.base import TemplateView

from solutions.views.solutions.helpers import HasPeopleDataMixin


class Solution028(HasPeopleDataMixin, TemplateView):
    template_name = "solutions/solution_028/view.html"
