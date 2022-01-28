from django.urls import path

from solutions.views import dispatch_to_view

urlpatterns = [
    path("", dispatch_to_view, name="app_home"),
    path("shell/<int:pk>/", dispatch_to_view, name="shell_detail"),
    path("problems/<int:pk>/", dispatch_to_view, name="problem_detail"),
    path("solutions/<int:pk>/", dispatch_to_view, name="solution_detail"),
]
