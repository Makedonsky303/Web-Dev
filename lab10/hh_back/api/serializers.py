from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"


# basic serializer

# class CompanyBasicSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=255)
#     description = serializers.CharField()
#     city = serializers.CharField(max_length=255)
#     address = serializers.CharField()


# class VacancyBasicSerializer(serializers.Serializer):
#     name = serializers.CharField(max_length=255)
#     description = serializers.CharField()
#     salary = serializers.FloatField()
#     company = serializers.ForeignKey(Company, on_delete=serializers.CASCADE, related_name="vacancies")
    
