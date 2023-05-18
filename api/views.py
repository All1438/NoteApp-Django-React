from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from .utils import getNotesList, getNoteDetail, createNote, updateNote, deleteNote

@api_view(['GET'])
def getRoutes(request):
    routes = [
         {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

# /notes GET
# /notes POST
# /notes/<id> GET
# /notes/<id> PUT
# /notes/<id> DELETE

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method == 'GET':
        return getNotesList(request)
    if request.method == 'POST':
        return createNote(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method == 'GET':
        return getNoteDetail(request, pk)
    if request.method == 'PUT':
        return updateNote(request, pk)
    if request.method == 'DELETE':
        return deleteNote(request, pk)


# @api_view(['GET'])
# def getNotes(request):
#     notes = Note.objects.all().order_by('-updated')
#     serializer = NoteSerializer(notes, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def getNote(request, pk):
#     note = Note.objects.get(id=pk)
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)

# @api_view(['PUT'])
# def updateNote(request, pk):
#     data = request.data # request.data = il s'agit des données envoyer dans le corps de la requête(JSON ou donné des formulaires), puis le convertit en un objet python utilisable
#     note = Note.objects.get(id=pk)
#     serializer = NoteSerializer(instance=note, data=data) # traité le contenu de data
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def deleteNote(request, pk):
#     note = Note.objects.get(id=pk)
#     note.delete()
#     return Response('Note was deleted!')

# @api_view(['POST'])
# def createNote(request):
#     data = request.data
#     note = Note.objects.create(
#         body=data['body'] # data['body'] = fait réference a une valeur de la clé 'body' d'un dictionnaire 'data', qui est dans React
#     )
#     serializer = NoteSerializer(note, many=False)
#     return Response(serializer.data)
    