<?php

namespace Tests\Feature;

use Tests\TestCase;

class StaffRoutesTest extends TestCase
{
    public function test_staff_dashboard_serves_the_staff_blade_view(): void
    {
        $response = $this->get('/staff/dashboard');

        $response
            ->assertOk()
            ->assertSee('staff-app', false)
            ->assertSee('Park Staff Console', false);
    }
}
