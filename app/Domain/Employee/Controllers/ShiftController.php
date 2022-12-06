<?php

namespace App\Domain\Employee\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Employee\BLL\Shift\ShiftBLLInterface;
use App\Domain\Employee\Models\Shift;
use App\Domain\Employee\Requests\ShiftRequest;

/**
 * @property ShiftBLLInterface shiftBLL
 */
class ShiftController extends Controller
{
    public function __construct(ShiftBLLInterface $shiftBLL)
    {
        $this->shiftBLL = $shiftBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ShiftRequest $request
     */
    public function store(ShiftRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Shift $shift
     */
    public function show(Shift $shift)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Shift  $shift
     */
    public function edit(Shift $shift)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ShiftRequest $request
     * @param  Shift  $shift
     */
    public function update(ShiftRequest $request, Shift $shift)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Shift $shift
     */
    public function destroy(Shift $shift)
    {
        //
    }
}
