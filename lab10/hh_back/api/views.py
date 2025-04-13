from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetails(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(id = self.kwargs["pk"])
    

class VacancyList(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetails(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    
class TopTenVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer
    
    def get_queryset(self):
        return Vacancy.objects.all().order_by('-salary')[:10]






# from django.shortcuts import render, get_object_or_404
# from .models import Company, Vacancy

# def company_list(request):
#     companies = Company.objects.all()
#     return render(request, 'company_list.html', {'companies': companies})

# def company_detail(request, pk):
#     company = get_object_or_404(Company, pk=pk)
#     return render(request, 'company_detail.html', {'company': company})


# def vacancy_list(request):
#     vacancies = Vacancy.objects.all()
#     return render(request, 'vacancy_list.html', {'vacancies': vacancies})

# def vacancy_detail(request, pk):
#     vacancy = get_object_or_404(Vacancy, pk=pk)
#     return render(request, 'vacancy_detail.html', {'vacancy': vacancy})


# from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# from django.urls import reverse_lazy
# from .models import Company, Vacancy


# class CompanyListView(ListView):
#     model = Company
#     template_name = 'company_list.html'
#     context_object_name = 'companies'

# class CompanyDetailView(DetailView):
#     model = Company
#     template_name = 'company_detail.html'
#     context_object_name = 'company'


# class VacancyListView(ListView):
#     model = Vacancy
#     template_name = 'vacancy_list.html'
#     context_object_name = 'vacancies'

# class VacancyDetailView(DetailView):
#     model = Vacancy
#     template_name = 'vacancy_detail.html'
#     context_object_name = 'vacancy'