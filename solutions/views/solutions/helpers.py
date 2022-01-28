class HasLoggedInUserMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = {
            "is_authenticated": True,
            "email": "noor@example.com",
            "first_name": "Noor",
        }
        return context


class HasAnonymousUserMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = {
            "is_authenticated": False,
            "email": None,
        }
        return context


class HasPeopleDataMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["people"] = [
            {
                "name": "Anima",
                "age": 29,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Asa",
                "age": 31,
                "pronouns": "they/them",
                "pets": ["Spot"],
            },
            {
                "name": "Asha",
                "age": 21,
                "pronouns": "he/him",
                "pets": ["Mr. Whiskers", "Fido"],
            },
            {
                "name": "Azami",
                "age": 33,
                "pronouns": "they/them",
                "pets": [],
            },
            {
                "name": "Basia",
                "age": 35,
                "pronouns": "he/him",
                "pets": [],
            },
            {
                "name": "Baz",
                "age": 19,
                "pronouns": "she/her",
                "pets": ["Sir Red Barrington"],
            },
            {
                "name": "Caris",
                "age": 18,
                "pronouns": "she/her",
                "pets": ["Spot"],
            },
            {
                "name": "Duska",
                "age": 20,
                "pronouns": "he/him",
                "pets": [],
            },
            {
                "name": "Evander",
                "age": 35,
                "pronouns": "they/them",
                "pets": [],
            },
            {
                "name": "Haris",
                "age": 30,
                "pronouns": "ze/zir",
                "pets": [],
            },
            {
                "name": "Idris",
                "age": 30,
                "pronouns": "he/him",
                "pets": ["Charlie", "Homer", "Mr. Steeds"],
            },
            {
                "name": "Kala",
                "age": 29,
                "pronouns": "Kala (no pronouns)",
                "pets": ["Mrs. Worthingham"],
            },
            {
                "name": "Kamal",
                "age": 39,
                "pronouns": "she/her",
                "pets": ["Opie"],
            },
            {
                "name": "Ken",
                "age": 29,
                "pronouns": "he/him",
                "pets": [],
            },
            {
                "name": "Kim",
                "age": 38,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Laila",
                "age": 17,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Lina",
                "age": 22,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Lulu",
                "age": 23,
                "pronouns": "they/them",
                "pets": [],
            },
            {
                "name": "Malik",
                "age": 28,
                "pronouns": "he/him",
                "pets": [],
            },
            {
                "name": "Nia",
                "age": 19,
                "pronouns": "they/them",
                "pets": ["Dog", "Cat", "Ironic hamster"],
            },
            {
                "name": "Noor",
                "age": 21,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Paz",
                "age": 22,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Raisa",
                "age": 19,
                "pronouns": "she/her",
                "pets": [],
            },
            {
                "name": "Samir",
                "age": 30,
                "pronouns": "he/him",
                "pets": [],
            },
            {
                "name": "Talia",
                "age": 33,
                "pronouns": "ze/zir",
                "pets": [],
            },
            {
                "name": "Zahara",
                "age": 34,
                "pronouns": "Zahara (no pronouns)",
                "pets": [],
            },
        ]
        return context
