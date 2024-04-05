from django.http.response import JsonResponse
import json

from api.models import Company, Vacancy

def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get("name"))
        return JsonResponse(company.to_json())

def company_detail(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"Company Not Found": str(e)})
    
    if request.method == "GET":
        return JsonResponse(company.to_json())
    elif request.method == "PUT":
        data = json.load(request.body)
        company.name = data.get("name")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"This company is deleted": True})
    
    return JsonResponse({"id": id})

def company_vacancy_list(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"Company Not Found": str(e)})

    vacancies_json = [v.to_json() for v in company.vacancies.all()]

    return JsonResponse(vacancies_json, safe=False)

def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data.get("name"))
        return JsonResponse(vacancy.to_json())

def vacancy_detail(request, id=None):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"Vacancy Not Found": str(e)})
    
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
        data = json.load(request.body)
        vacancy.name = data.get("name")
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"This vacancy is deleted": True})
    
    return JsonResponse({"id": id})

def top_ten_vacancies(request, id=None):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
