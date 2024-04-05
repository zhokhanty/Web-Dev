from django.db import models

from django.utils.html import format_html

class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return f"name: {self.name}, description: {self.description}, city: {self.city}, address: {self.address}"
    
    def to_json(self):
        return {
            "name": self.name,
            "description": self.description,
            "city": self.city,
            "address": self.address
        }
    
class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")

    def __str__(self):
        return f"name: {self.name}, salary: {self.salary}"
    
    def to_json(self):
        return {
            "name": self.name,
            "salary": self.salary
        }
