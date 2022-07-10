from django.shortcuts import render
from django.core.mail import send_mail
import html


# Create your views here.
def avatar(request):
    return render(request, 'mainapp/home.html')


def about(request):
    # Доделать отправку
    if request.method == "POST":
        name_ms = request.POST.get('name-ms')
        email_ms = request.POST.get('email-ms')
        subject_ms = request.POST.get('subject-ms')
        text_ms = request.POST.get('text-ms')

        name_ms = html.escape(name_ms)
        email_ms = html.escape(email_ms)
        subject_ms = html.escape(subject_ms)
        text_ms = html.escape(text_ms)

        result_text = "Received from " + email_ms + ":\n" + text_ms

        my_email = "chistohin1@mail.ru"
        try:
            send_mail(
                subject_ms,
                result_text,
                my_email,
                [
                    'chistohin1@mail.ru',
                ],
                fail_silently=False,
            )
            return render(request, "mainapp/aboutme.html",
                          {'name_ms': name_ms})
        except:
            war = "Your message has not been sent, try again..."
            return render(request, "mainapp/aboutme.html", {'warning': war})
    else:
        return render(request, "mainapp/aboutme.html", {})
