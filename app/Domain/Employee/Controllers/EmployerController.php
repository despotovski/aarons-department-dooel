<?php

namespace App\Domain\Employee\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Employee\BLL\Employer\EmployerBLLInterface;
use App\Domain\Employee\Models\Employer;
use App\Domain\Employee\Requests\EmployerRequest;

/**
 * @property EmployerBLLInterface employerBLL
 */
class EmployerController extends Controller
{
    public function __construct(EmployerBLLInterface $employerBLL)
    {
        $this->employerBLL = $employerBLL;
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
     * @param EmployerRequest $request
     */
    public function store(EmployerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Employer $employer
     */
    public function show(Employer $employer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Employer  $employer
     */
    public function edit(Employer $employer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EmployerRequest $request
     * @param  Employer  $employer
     */
    public function update(EmployerRequest $request, Employer $employer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Employer $employer
     */
    public function destroy(Employer $employer)
    {
        //
    }
}
