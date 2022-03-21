from django.views.generic.base import TemplateView
from solutions.views.solutions.helpers import HasAnonymousUserMixin


class Solution013(HasAnonymousUserMixin, TemplateView):
    template_name = "solutions/solution_012.html"
