<?php

namespace App\Http\Controllers\External;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\MakeApiService;

class MakeApiController extends Controller
{
    protected $makeApiService;

    public function __construct(MakeApiService $makeApiService)
    {
        $this->makeApiService = $makeApiService;
    }

    public function listDataStores(){
        $teamId = 918081;
        $dataStores = $this->makeApiService->getDataStores($teamId);

        return response()->json($dataStores);
    }
}
