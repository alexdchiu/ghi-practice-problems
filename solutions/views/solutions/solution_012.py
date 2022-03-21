from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasLoggedInUserMixin


class Solution012(HasLoggedInUserMixin, TemplateView):
    template_name = "solutions/solution_012.html"
