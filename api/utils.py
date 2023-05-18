from .models import Note
from .serializers import NoteSerializer
from rest_framework.response import Response

def getNotesList(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

def getNoteDetail(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def createNote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body'] # data['body'] = fait réference a une valeur de la clé 'body' d'un dictionnaire 'data', qui est dans React
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data # request.data = il s'agit des données envoyer dans le corps de la requête(JSON ou donné des formulaires), puis le convertit en un objet python utilisable
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data) # traité le contenu de data
    if serializer.is_valid():
        serializer.save()
    return serializer.data # on n'utilise pas de Response ici, car on veut générer une réponse JSON pour le update

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted!')