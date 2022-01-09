<?php

namespace App\Actions\Customers;

use Illuminate\Http\Request;
use App\Traits\RedirectResponseRoute;
use Illuminate\Http\RedirectResponse;
use Lorisleiva\Actions\Concerns\AsAction;

class DestroyCustomerAction
{
    use AsAction, RedirectResponseRoute;

    private Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @param int $id
     * @return RedirectResponse
     */
    public function handle(int $id): RedirectResponse
    {
        $customer = $this->request->user()->customer()->find($id);

        if(!$customer) {
            return $this->error('customer.index');
        }

        $customer->delete();
        return $this->success('customer.index');
    }
}
