from django.views.generic.base import TemplateView
from problems.views.problems.helpers import HasAnonymousUserMixin


class Problem013(HasAnonymousUserMixin, TemplateView):
    template_name = "problems/problem_012/view.html"
