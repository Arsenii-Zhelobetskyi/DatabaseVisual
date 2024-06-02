<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worksheet;

class WorksheetController extends Controller
{
    /* show all worksheets */
    public function index()
    {
        $worksheets = Worksheet::all();
        return response()->json($worksheets);
    }
    /*save new worksheets*/
    public function store(Request $request)
    {
      $validated = $request->validate([
      'worksheet_name' => 'required|string|max:100|unique:worksheets',
      'user_id' => 'required|exists:users,id',
      'table_data' => 'nullable|json'
    ]);

    $worksheet = Worksheet::create($validated);
    return response()->json($worksheet, 201);
  }

    public function show($id)
    {
      $worksheet = Worksheet::findOrFail($id);
      return response()->json($worksheet);
    }

    public function update(Request $request, $id)
    {
      $worksheet = Worksheet::findOrFail($id);
      $validated = $request->validate([
        'worksheet_name' => 'sometimes|required|string|max:100|unique:worksheets,worksheet_name,' . $worksheet->id,
        'user_id' => 'sometimes|required|exists:users,id',
        'table_data' => 'nullable|json'
      ]);

        $worksheet->update($validated);
        return response()->json($worksheet);
    }
    public function destroy($id)
      {
        $worksheet = Worksheet::findOrFail($id);
        $worksheet->delete();

        return response()->json(null, 204);
      }
}
