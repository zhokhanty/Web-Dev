from django.http.response import JsonResponse
import json

from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt 

@csrf_exempt
def company_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company = Company.objects.create(
            name=data.get("name"),
            description=data.get("description"), 
            city=data.get("city"), 
            address=data.get("address")
            )
        return JsonResponse(company.to_json())

@csrf_exempt
def company_detail(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"Company Not Found": str(e)})
    
    if request.method == "GET":
        return JsonResponse(company.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        if "name" in data:
            company.name = data["name"]
        if "description" in data:
            company.description = data["description"]
        if "city" in data:
            company.city = data["city"]
        if "address" in data:
            company.address = data["address"]
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"This company is deleted": True})
    
    return JsonResponse({"id": id})

@csrf_exempt
def company_vacancy_list(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"Company Not Found": str(e)})

    vacancies_json = [v.to_json() for v in company.vacancies.all()]

    return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        company_name = data.get("company_name")
        try:
            company = Company.objects.get(name=company_name)
        except Company.DoesNotExist:
            return JsonResponse({"error": f"Company with name '{company_name}' does not exist"}, status=400)
        
        vacancy = Vacancy.objects.create(
            name=data.get("name"), 
            description=data.get("description"),
            salary=data.get("salary"),
            company=company
        )
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_detail(request, id=None):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"Vacancy Not Found": str(e)})
    
    if request.method == "GET":
        return JsonResponse(vacancy.to_json())
    elif request.method == "PUT":
        data = json.loads(request.body)
        company_name = data.get("company_name")
        try:
            company = Company.objects.get(name=company_name)
        except Company.DoesNotExist:
            return JsonResponse({"error": f"Company with name '{company_name}' does not exist"}, status=400)
        if "name" in data:
            vacancy.name = data["name"]
        if "description" in data:
            vacancy.description = data["description"]
        if "salary" in data:
            vacancy.salary = data["salary"]
        if "company_name" in data:
            vacancy.company = company
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"This vacancy is deleted": True})
    
    return JsonResponse({"id": id})


@csrf_exempt
def top_ten_vacancies(request, id=None):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
